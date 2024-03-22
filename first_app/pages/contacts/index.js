import Heading from "@/Components/Heading"
import Link from "next/link"

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  if (!data) {
    return {notFound: true}
  }
  return {props: {contacts: data}}
} 


const Contacts = ({contacts}) => {
  return (
    <>
    <Heading text="Contacts list:"/>
    <ul>
    {contacts && contacts.map(({id, name}) => (
      <li key={id}>
        <strong><Link href={`/contacts/${id}`}>{name}</Link></strong>
      </li>
    ))}
    </ul>
  </>
)}
  
export default Contacts