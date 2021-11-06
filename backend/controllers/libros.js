import libro from "../models/libros.js";

const registerLibro = async (req,res) => {
  if (!req.body.name || !req.body.description)
    return res.status(400).send("Incomplete data");

  const existingLibro = await libro.findOne({ name: req.body.name });
  if (existingLibro) return res.status(400).send("The book already exists");

  const libroSchema = new libro({
    name: req.body.name,
    description: req.body.description,
    dbStatus: true,
  });

  const result = await libroSchema.save();

  if (!result) return res.status(400).send("Failed to register book");

  res.status(200).send({ result });
};

export default { registerLibro };