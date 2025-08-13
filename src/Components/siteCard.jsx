import './siteCard.css';

function SiteCard({ siteName, URL, img }){

    return(
        <div id='siteCard'>
            <a href={URL} target="_blank" title={siteName}>
                <h1 id='siteName'>{siteName}</h1>
                <img src={img} alt={`Portfolio site: ${siteName}`} id='siteImg'/>
            </a>
        </div>
    );
}

export default SiteCard;