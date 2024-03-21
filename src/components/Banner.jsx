import './styling.css';

function Banner() {
    // functional component returns html     
    // return header tag that says orbit report and p tag with user instructions
    return (
    <header>
        <h1>Orbit Report</h1>
        <p>Click on the buttons to see the satellites in that orbit type</p>
    </header>
   )
}

export default Banner;