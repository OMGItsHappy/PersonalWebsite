export default function SeeMyWork()
{
    return(
    <div id = 'page'>
        <div id = 'items'>
            <div id = "page-header">
                See My Work
            </div>
            <div id = 'subheader'>
                <a href = 'https://www.linkedin.com/in/oliver--schwab/' className = 'my-underline'>LinkedIn</a>
            </div>
            <div id = 'content'>
                Connect with me on LinkedIn!<br/>
                Here you can get a better view of my work experience.
            </div>

            <div id = "subheader">
            <a href = 'https://gitlab.com/Happy___' className = 'my-underline'>GitLab</a>
            </div>
            <div id = "content">
                I host the code writen for school on GitLab.<br/>
                This contains code throughtout my college career.
            </div>
            <div id = "subheader">
                <a href = "https://github.com/OMGItsHappy" className="my-underline">GitHub</a>
            </div>
            <div id = "content">
                I host my personal projects on GitHub.<br/>
                Here you can find my personal projects and code I have written in my free time.<br/>
                A personal favorite of mine is <a href="https://github.com/Hunt-Bounty-Predictor" className="my-underline">Hunt Bounty Predictor</a>.<br/>
            </div>
        </div>
    </div>
    )
}