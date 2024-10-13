import { useState } from "react"
import "./components.css"

function saveMoodData(e, currentMoodData: string, setLocalMoodData: CallableFunction) {
    e.preventDefault()
    setLocalMoodData(currentMoodData)
    localStorage.setItem("cbtMood", JSON.stringify(currentMoodData))
}

function Mood() {
    // const [localMoodData, setLocalMoodData] = useState(JSON.parse(localStorage.getItem("cbtMood")))
    const [localMoodData, setLocalMoodData] = useState({
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
      });

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
                        <td>{entry.what}</td>
                        <td>{entry.where}</td>
                        <td>{entry.who}</td>
                        <td>{entry.when}</td>
                        <td>{entry.emotion}</td>
                        <td>{entry.strength_em}</td>
                        <td>{entry.thought}</td>
                        <td>{entry.strength_th}</td>
                        <td>{entry.physical_feeling || "N/A"}</td>
                        <td>{entry.unhelpful_thinking_style || "N/A"}</td>
                        <td>{entry.notes}</td>
                    </tr>
                    ))}
                </tbody>
                </table>

            <button className="saveButton" onClick={(e) => {
                saveMoodData(e, localMoodData, setLocalMoodData)
            }}>SAVE</button>
        </>
    )
}

export default Mood