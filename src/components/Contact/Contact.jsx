import { FaPhone } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import css from "./Contact.module.css";

export default function Contact({contact: { name, number, id }, onDelete }) {
  return (
    <div className={css.contact}>
      <ul>
        <li className={css.item}>
          <IoPersonSharp />
          <p>{name}</p>
        </li>
        <li className={css.item}>
          <FaPhone />
          <p>{number}</p>
        </li>
      </ul>

      <button className={css.button} onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
