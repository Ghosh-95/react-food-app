export default function User({ userData: { name, job, github } }) {

    return (
        <>
            <h2>Hey, I am {name}</h2>
            <p>I am a {job}</p>
            <a target="_blank" href={github}><i className="fa-brands fa-github"></i></a>
        </>
    );
}