export default function UserTitle({ user }) {
    return <h3>{`${user.firstName} ${user.lastName}`}</h3>;
}