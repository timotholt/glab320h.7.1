import { useState } from 'react'

function Form({ moviesearch }) {
  const [formData, setFormData] = useState({
    searchterm: ""
  })

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    moviesearch(formData.searchterm)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchterm"
        placeholder="Enter a movie name"
        onChange={handleChange}
        value={formData.searchterm}
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default Form