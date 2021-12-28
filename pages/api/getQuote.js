const getQuote = (req, res) => {
    try {
      const quote = quotes[Math.floor(Math.random() * quotes.length)];
      res.status(200).json({ quote: quote });
    } catch (err) {
      res.status(500).json({ error: "OH NO!, An sever error was encountered!" });
    }
  };
  
export default getQuote;