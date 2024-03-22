import { useRouter } from "next/router"
import Link from "next/link"
import styles from "@/styles/navbar.module.scss"

const navigation = [
  {id: 1, title: 'Home', path: '/'},
  {id: 2, title:'Contacs', path: '/contacts'},
  {id: 3, title: 'Posts', path: '/posts'}
]


const Navbar = () => {
  const {pathname} = useRouter();
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        FirstApp
      </div>
      <div className={styles.links}>
        {navigation.map(({id, title, path}) => (
          <Link key={id} href={path} className={pathname === path ? styles.active : null}>{title}</Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar;