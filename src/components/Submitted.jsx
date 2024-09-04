import { useSelector } from 'react-redux';

const Submitted = () => {
  const { submittedData } = useSelector((state) => state.form);

  if (!submittedData) {
    return <div>No data submitted yet.</div>;
  }

  return (
    <div className="container">
      <h1>Submitted Data</h1>
      <div className="form-group">
        <label>Name :</label>
        <p>{submittedData.name}</p>
      </div>
      <div className="form-group">
        <label>Phone Number :</label>
        <p>{submittedData.phoneNumber}</p>
      </div>
      <div className="form-group">
        <label>Email :</label>
        <p>{submittedData.email}</p>
      </div>
      <div className="form-group">
        <label>Address :</label>
        <p>{submittedData.address}</p>
      </div>
      <div className="form-group">
        <label>University :</label>
        <p>{submittedData.university}</p>
      </div>
      <div className="form-group">
        <label>Message :</label>
        <p>{submittedData.message}</p>
      </div>
    </div>
  );
};

export default Submitted;
