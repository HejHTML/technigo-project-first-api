import listEndpoints from "express-list-endpoints"
import fs from "fs"
import cors from "cors"
import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"


dotenv.config()

const topMusicData = JSON.parse(
  fs.readFileSync("./data/top-music.json", "utf-8")
)

const port = process.env.PORT || 8080
const app = express()

app.use(cors())
app.use(express.json())

const mongoUrl = process.env.MONGO_URL


if (!mongoUrl) {
  console.error("❌ MONGO_URL is missing in your .env file")
}

mongoose.connect(mongoUrl)
mongoose.Promise = Promise

// MODEL
const Track = mongoose.model("Track", {
  id: Number,
  trackName: String,
  artistName: String,
  genre: String,
  bpm: Number,
  energy: Number,
  danceability: Number,
  loudness: Number,
  liveness: Number,
  valence: Number,
  length: Number,
  acousticness: Number,
  speechiness: Number,
  popularity: Number
})


mongoose.connection.once("open", async () => {
  console.log("Connected to MongoDB")

  if (process.env.RESET_DB) {
    await Track.deleteMany()

    for (const item of topMusicData) {
      await Track.create(item)
    }

    console.log("Database seeded!")
  }
})

// ROUTES
app.get("/", (req, res) => {
  res.json({
    endpoints: listEndpoints(app)
  })
})

app.get("/tracks", async (req, res) => {
  try {
    const { genre, minBpm, maxBpm, limit } = req.query

    const query = {}

    if (genre) {
      query.genre = genre
    }

    if (minBpm || maxBpm) {
      query.bpm = {}
      if (minBpm) query.bpm.$gte = Number(minBpm)
      if (maxBpm) query.bpm.$lte = Number(maxBpm)
    }

    const tracks = await Track.find(query)
      .limit(Number(limit) || 20)

    res.json(tracks)
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" })
  }
})

app.get("/tracks/:id", async (req, res) => {
  try {
    const track = await Track.findOne({
      id: Number(req.params.id)
    })

    if (!track) {
      return res.status(404).json({ message: "Not found" })
    }

    res.json(track)
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" })
  }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})