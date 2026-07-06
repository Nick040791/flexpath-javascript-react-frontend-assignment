const Home = () => {
    return  <section  className="container my-5">
        <div className="card shadow-sm border-0">
            <div className="card-body p-4 p-md-5">
                <h1 className="display-5 fw-bold text-primary mb-3">User Behavior Dataset</h1>
                <p className="lead-text-muted">This dataset provides a comprehensive analysis
                    of mobile device usage patterns and user behavior classification. It contains 700 samples
                    of user data, including metrics such as app usage time, screen-on time, battery drain, and data
                    consumption. Each entry is categorized into one of five user behavior classes, ranging from light to
                    extreme usage, allowing for insightful analysis and modeling.</p>

                <p className="h-4 fw-semibold mt-4 mb-3">Key Features: </p>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item px-0"><strong>User ID:</strong> Unique identifier for each user.</li>
                    <li className="list-group-item px-0"><strong>Device Model:</strong> Model of the user{`'s`} smartphone.</li>
                    <li className="list-group-item px-0"><strong>Operating System:</strong> The OS of the device (iOS or Android).</li>
                    <li className="list-group-item px-0"><strong>App Usage Time:</strong> Daily time spent on mobile applications, measured in minutes.</li>
                    <li className="list-group-item px-0"><strong>Screen On Time:</strong> Average hours per day the screen is active.</li>
                    <li className="list-group-item px-0"><strong>Battery Drain:</strong> Daily battery consumption in mAh.</li>
                    <li className="list-group-item px-0"><strong>Number of Apps Installed:</strong> Total apps available on the device.</li>
                    <li className="list-group-item px-0"><strong>Data Usage:</strong> Daily mobile data consumption in megabytes.</li>
                    <li className="list-group-item px-0"><strong>Age:</strong> Age of the user.</li>
                    <li className="list-group-item px-0"><strong>Gender:</strong> Gender of the user (Male or Female).</li>
                    <li className="list-group-item px-0"><strong>User Behavior Class:</strong> Classification of user behavior based on usage patterns (1 to 5).</li>
                </ul>
            </div>
        </div>
        <div>
            <a href="https://www.kaggle.com/datasets/valakhorasani/mobile-device-usage-and-user-behavior-dataset?resource=download" >Sourced from this Kaggle Dataset</a>
        </div>
    </section>
};

export default Home;