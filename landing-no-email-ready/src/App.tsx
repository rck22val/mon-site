import { useState } from 'react'

export default function App() {
  const [loading,setLoading]=useState(false)

  const handleSubmit=(e:any)=>{
    e.preventDefault()
    setLoading(true)

    const form=new FormData(e.target)
    const data={
      name:form.get('name'),
      email:form.get('email'),
      message:form.get('message')
    }

    console.log(data)
    alert('Message reçu ✅ (email désactivé)')

    setLoading(false)
  }

  return (
    <div style={{padding:40}}>
      <h1>Landing Page</h1>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Nom" required /><br /><br />
        <input name="email" type="email" placeholder="Email" required /><br /><br />
        <textarea name="message" placeholder="Message" required /><br /><br />

        <button type="submit">
          {loading ? 'Envoi...' : 'Envoyer'}
        </button>
      </form>
    </div>
  )
}
