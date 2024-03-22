import ContactInfo from "@/Components/ContactInfo"

export const getServerSideProps = async (context) => {
  const {id} = context.params
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await response.json()
  if (!data) {
    return {notFound: true}
  }
  return {props: {contact: data}}
} 

const Contact = ({contact}) => {
  return <div>
    <ContactInfo contact={contact}/>
  </div>
}
  
export default Contact