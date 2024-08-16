import React, { useState } from "react";

const hStyle = {
  maxWidth: "1000px",
  margin: "40px auto",
  padding: "20px",
  textAlign: "center",
  borderRadius: "7px",
  boxShadow: "0 4px 8px #0000001a",
};

const formStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
};

const btStyle = {
  display: "flex",
  marginBottom: "-55px",
  gap: "5px",
};

const tStyle = {
  display: "grid",
  alignItems: "center",
  borderRadius: "50px",
  marginTop: "15px",
};

const App = () => {
  const [counthies, setCounthies] = useState([]);
  const [name, setName] = useState("");
  const [gold, setGold] = useState("");
  const [silver, setSilver] = useState("");
  const [bronze, setBronze] = useState("");

  // const handleUpdateCounthy = (event) => {
  //   event.preventDefault();
  //   // 수정로직
  // };

  // const handleDelete = () => {};

  return (
    <div style={hStyle}>
      <h1>2024 파리 올림픽</h1>
      <form
        onSubmit={function (e) {
          e.preventDefault();

          const newCounthies = {
            id: new Date().getTime(),
            name: name,
            gold: gold,
            silver: silver,
            bronze: bronze,
          };
          setCounthies([...counthies, newCounthies]);
        }}
        style={formStyle}
      >
        <div>
          <p>국가명</p>
          <input
            value={name}
            onChange={function (c) {
              setName(c.target.value);
            }}
            type="text"
            placeholder="국가 입력"
          />
        </div>
        <div>
          <p>금메달</p>
          <input
            value={gold}
            onChange={function (g) {
              setGold(g.target.value);
            }}
            type="number"
            placeholder="0"
          />
        </div>
        <div>
          <p>은메달</p>
          <input
            value={silver}
            onChange={function (s) {
              setSilver(s.target.value);
            }}
            type="number"
            placeholder="0"
          />
        </div>
        <div>
          <p>동메달</p>
          <input
            value={bronze}
            onChange={function (b) {
              setBronze(b.target.value);
            }}
            type="number"
            placeholder="0"
          />
        </div>
        <div style={btStyle}>
          <button type="submit">국가 추가</button>
          <button type="button">업데이트</button>
        </div>
      </form>
      <div style={tStyle}>
        <table>
          <thead>
            <th>국가명</th>
            <th>금메달</th>
            <th>은메달</th>
            <th>동메달</th>
          </thead>
          <tbody>
            {counthies
              // .sort(a, b) => {}
              .map((c) => (
                <tr key={c.id}>
                  <td>{c.name}</td>
                  <td>{c.gold}</td>
                  <td>{c.silver}</td>
                  <td>{c.bronze}</td>
                  <button>삭제</button>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
