export default async function handler(req, res) {
  const { symbol = "BTCUSDT", interval = "240", category = "linear", limit = "200" } = req.query;
  const url = `https://api.bybit.com/v5/market/kline?category=${category}&symbol=${symbol}&interval=${interval}&limit=${limit}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Bybit API failed", details: err.message });
  }
}
