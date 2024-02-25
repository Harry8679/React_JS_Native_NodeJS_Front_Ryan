export const Button = ({ name ="", email, password }) => {
    return (
        <button type="submit" className="btn btn-primary" disabled={(name && !name) || !email || email.length < 6 || password.length < 6}>Submit</button>
    );
}