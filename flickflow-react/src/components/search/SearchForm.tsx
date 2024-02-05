import axios from "axios";
import { useState } from "react";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.post("mylink?q=${query}");
      setResults(response.data);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Введите текст"
        />
        <button onClick={handleSearch}>
          {loading ? <span>Загрузка...</span> : <span>Найти</span>}
        </button>
      </div>
      {loading && <div>Загрузка...</div>}
      {!loading && results.length > 0 && (
        <ul>
          {results.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      )}
      {!loading && results.length === 0 && <div>Нет результатов</div>}
    </div>
  );
};

export default SearchForm;
