import Loading from '../../images/loading.gif';

export const Button = ({ name ="", email, password, loading }) => {
    return (
        <button type="submit" className="btn btn-primary" disabled={(name && !name) || !email || email.length < 6 || password.length < 6}>
            {loading ? <img src={Loading} alt='loading images' style={{ height: '20px' }} />: 'Submit'}
        </button>
    );
}