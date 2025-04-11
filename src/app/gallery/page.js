import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../styles/gallery.css";

export default function Gallery() {
    return (
        <div className="container">
            {/* Main content section */}
            <div className="content">
                <h1 className="heading">
                    Gallery
                </h1>
                <p className="subheading">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                {/* 3 columns and about 10 rows (grid structure) */}
                <div className="grid">
                    <div className="grid-cell">
                        <div class="image-overlay-container">
                            <img src="your-image.jpg" class="rounded-image" alt="Gallery Item" />
                            <div class="overlay-text">Your Text Here</div>
                        </div>
                    </div>

                    <div className="grid-cell">
                        <div class="image-overlay-container">
                            <img src="your-image.jpg" class="rounded-image" alt="Gallery Item" />
                            <div class="overlay-text">Your Text Here</div>
                        </div>
                    </div>

                    <div className="grid-cell">
                        <div class="image-overlay-container">
                            <img src="your-image.jpg" class="rounded-image" alt="Gallery Item" />
                            <div class="overlay-text">Your Text Here</div>
                        </div>
                    </div>

                    <div className="grid-cell">
                        <div class="image-overlay-container">
                            <img src="your-image.jpg" class="rounded-image" alt="Gallery Item" />
                            <div class="overlay-text">Your Text Here</div>
                        </div>
                    </div>

                    <div className="grid-cell-text">
                        <div className="cell-content">
                           <p className="cell-text">
                            This is a textbox about Pottery @ Brown. Pottery @ Brown does really cool stuff and we're happy to have them as a client.
                            </p>
                        </div>
                    </div>

                    <div className="grid-cell">
                        <div class="image-overlay-container">
                            <img src="your-image.jpg" class="rounded-image" alt="Gallery Item" />
                            <div class="overlay-text">Your Text Here</div>
                        </div>
                    </div>

                    <div className="grid-cell">
                        <div class="image-overlay-container">
                            <img src="your-image.jpg" class="rounded-image" alt="Gallery Item" />
                            <div class="overlay-text">Your Text Here</div>
                        </div>
                    </div>

                    <div className="grid-cell">
                        <div class="image-overlay-container">
                            <img src="your-image.jpg" class="rounded-image" alt="Gallery Item" />
                            <div class="overlay-text">Your Text Here</div>
                        </div>
                    </div>

                    <div className="grid-cell-text">
                        <div className="cell-content">
                           <p className="cell-text">
                            This is a textbox about Pottery @ Brown. Pottery @ Brown does really cool stuff and we're happy to have them as a client.
                            </p>
                        </div>
                    </div>

                    <div className="grid-cell-text">
                        <div className="cell-content">
                           <p className="cell-text">
                            This is a textbox about Pottery @ Brown. Pottery @ Brown does really cool stuff and we're happy to have them as a client.
                            </p>
                        </div>
                    </div>

                    <div className="grid-cell">
                        <div class="image-overlay-container">
                            <img src="your-image.jpg" class="rounded-image" alt="Gallery Item" />
                            <div class="overlay-text">Your Text Here</div>
                        </div>
                    </div>

                    <div className="grid-cell">
                        <div class="image-overlay-container">
                            <img src="your-image.jpg" class="rounded-image" alt="Gallery Item" />
                            <div class="overlay-text">Your Text Here</div>
                        </div>
                    </div>

                    
                    
                </div>
            </div>
        </div>

    );
}
