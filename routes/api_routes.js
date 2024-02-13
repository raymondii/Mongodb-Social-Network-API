const router = require("express").Router();
const User = require('../models/Users');
const Thought = require('../models/Thoughts');
const Reaction = require('../models/Reactions');

// User controllers
router.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/users/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/users/:userId', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/users/:userId', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Thought controllers
router.post('/thoughts', async (req, res) => {
  try {
    const thought = await Thought.create(req.body);
    res.status(201).json(thought);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/thoughts', async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.status(200).json(thoughts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/thoughts/:thoughtId', async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.status(200).json(thought);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/thoughts/:thoughtId', async (req, res) => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
    if (!updatedThought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.status(200).json(updatedThought);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/thoughts/:thoughtId', async (req, res) => {
  try {
    const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Reaction controllers
router.post('/reactions', async (req, res) => {
  try {
    const reaction = await Reaction.create(req.body);
    res.status(201).json(reaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/reactions', async (req, res) => {
  try {
    const reactions = await Reaction.find();
    res.status(200).json(reactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/reactions/:reactionId', async (req, res) => {
  try {
    const reaction = await Reaction.findById(req.params.reactionId);
    if (!reaction) {
      return res.status(404).json({ message: 'Reaction not found' });
    }
    res.status(200).json(reaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/reactions/:reactionId', async (req, res) => {
  try {
    const updatedReaction = await Reaction.findByIdAndUpdate(req.params.reactionId, req.body, { new: true });
    if (!updatedReaction) {
      return res.status(404).json({ message: 'Reaction not found' });
    }
    res.status(200).json(updatedReaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/reactions/:reactionId', async (req, res) => {
  try {
    const reaction = await Reaction.findByIdAndDelete(req.params.reactionId);
    if (!reaction) {
      return res.status(404).json({ message: 'Reaction not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
