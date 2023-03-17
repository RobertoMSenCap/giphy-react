import './Button.css'

export default function Button({ children, type }) {
    return <button type={type} className="default-btn">{children}</button>
}