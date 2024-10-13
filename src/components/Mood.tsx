import { useState } from "react";
import "./components.css";

// Save the mood data to localStorage
function saveMoodData(e, currentMoodData, setLocalMoodData) {
  e.preventDefault();
  setLocalMoodData(currentMoodData);
  localStorage.setItem("cbtMood", JSON.stringify(currentMoodData));
}

// Handle input change for an individual cell in the table
const handleInputChange = (index, field, value, localMoodData, setLocalMoodData) => {
  const updatedEntries = [...localMoodData.entries];
  updatedEntries[index][field] = value;
  setLocalMoodData({ entries: updatedEntries });
};

// Add a new empty row
const addNewRow = (localMoodData, setLocalMoodData) => {
  const newRow = {
    what: "",
    where: "",
    who: "",
    when: "",
    emotion: "",
    strength_em: 0,
    thought: "",
    strength_th: 0,
    physical_feeling: "",
    unhelpful_thinking_style: "",
    notes: ""
  };
  setLocalMoodData({ entries: [...localMoodData.entries, newRow] });
};

function Mood() {
  // Initialize state by checking localStorage or falling back to default
  const initialState = localStorage.getItem("cbtMood")
    ? JSON.parse(localStorage.getItem("cbtMood"))
    : {
        entries: [
          {
            what: "",
            where: "",
            who: "",
            when: "",
            emotion: "",
            strength_em: 0,
            thought: "",
            strength_th: 0,
            physical_feeling: "",
            unhelpful_thinking_style: "",
            notes: ""
          }
        ]
      };

  const [localMoodData, setLocalMoodData] = useState(initialState);

  return (
    <>
      <h1 id="mood">Mood</h1>

      <table>
        <thead>
          <tr>
            <th>What</th>
            <th>Where</th>
            <th>Who</th>
            <th>When</th>
            <th>Emotion</th>
            <th>Strength (Em)</th>
            <th>Thought</th>
            <th>Strength (Th)</th>
            <th>Physical Feeling</th>
            <th>Unhelpful Thinking Style</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {localMoodData.entries.map((entry, index) => (
            <tr key={index}>
              <td>
                <input
                  value={entry.what}
                  onChange={(e) =>
                    handleInputChange(index, "what", e.target.value, localMoodData, setLocalMoodData)
                  }
                />
              </td>
              <td>
                <input
                  value={entry.where}
                  onChange={(e) =>
                    handleInputChange(index, "where", e.target.value, localMoodData, setLocalMoodData)
                  }
                />
              </td>
              <td>
                <input
                  value={entry.who}
                  onChange={(e) =>
                    handleInputChange(index, "who", e.target.value, localMoodData, setLocalMoodData)
                  }
                />
              </td>
              <td>
                <input
                  value={entry.when}
                  onChange={(e) =>
                    handleInputChange(index, "when", e.target.value, localMoodData, setLocalMoodData)
                  }
                />
              </td>
              <td>
                <input
                  value={entry.emotion}
                  onChange={(e) =>
                    handleInputChange(index, "emotion", e.target.value, localMoodData, setLocalMoodData)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={entry.strength_em}
                  onChange={(e) =>
                    handleInputChange(index, "strength_em", e.target.value, localMoodData, setLocalMoodData)
                  }
                />
              </td>
              <td>
                <input
                  value={entry.thought}
                  onChange={(e) =>
                    handleInputChange(index, "thought", e.target.value, localMoodData, setLocalMoodData)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={entry.strength_th}
                  onChange={(e) =>
                    handleInputChange(index, "strength_th", e.target.value, localMoodData, setLocalMoodData)
                  }
                />
              </td>
              <td>
                <input
                  value={entry.physical_feeling}
                  onChange={(e) =>
                    handleInputChange(index, "physical_feeling", e.target.value, localMoodData, setLocalMoodData)
                  }
                />
              </td>
              <td>
                <input
                  value={entry.unhelpful_thinking_style}
                  onChange={(e) =>
                    handleInputChange(index, "unhelpful_thinking_style", e.target.value, localMoodData, setLocalMoodData)
                  }
                />
              </td>
              <td>
                <input
                  value={entry.notes}
                  onChange={(e) =>
                    handleInputChange(index, "notes", e.target.value, localMoodData, setLocalMoodData)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Button to add new row */}
      <button onClick={() => addNewRow(localMoodData, setLocalMoodData)}>Add New Row</button>

      {/* Save button */}
      <button className="saveButton" onClick={(e) => saveMoodData(e, localMoodData, setLocalMoodData)}>
        SAVE
      </button>
    </>
  );
}

export default Mood;
