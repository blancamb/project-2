import React from 'react'

const Form = ({ handleSelect, handleInput, handleClick, updateInfo }) => (
  <div>
    <select onChange={handleSelect}
      selectedvalue="selected">
      <option value="selected" selected disabled>Choose a Spirit:</option>
      {updateInfo.allSpirits.map(spirit => {
        return <option key={spirit}>{spirit}</option>
      })
      }
    </select>
    <input onChange={handleInput}
      type="text" placeholder="type a word" >
    </input>
    <button onClick={handleClick}>Generate Results</button>
  </div>
)

export default Form