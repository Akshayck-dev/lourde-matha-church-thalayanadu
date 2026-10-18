/**
 * Lourde Matha Church, Thalayanadu - Ministry Database
 * Centralized content for dynamic modals
 */

const COURSE_DATA = {
    eucharist: {
        title: "Holy Eucharist & Adoration",
        tagline: "The Heart of Parish Life",
        duration: "Sundays 6:00 AM · 7:30 AM · 9:30 AM | Weekdays 6:00 AM & 5:30 PM",
        seats: "Open to all",
        age: "All ages",
        highlights: [
            "Daily Holy Mass, morning and evening",
            "First Friday Mass & Eucharistic Adoration",
            "Solemn celebrations on feast days",
            "Confession available before Mass"
        ],
        content: `
            <h5 class="text-navy mb-3">About</h5>
            <p>The Holy Eucharist is the source and summit of our parish life. The faithful gather daily around the altar — in the quiet of the morning and the calm of the evening — to celebrate the sacrifice of Christ.</p>

            <h5 class="text-navy mb-3">Adoration</h5>
            <p>On the First Friday of every month, the parish holds Holy Mass followed by Eucharistic Adoration, offering a precious hour of silent prayer before the Blessed Sacrament.</p>

            <h5 class="text-navy mb-3">Note</h5>
            <p>Timings may vary on feast days and special occasions — please confirm with the parish office.</p>
        `
    },
    sacraments: {
        title: "Sacraments",
        tagline: "Baptism · Confirmation · Marriage",
        duration: "By appointment with the parish office",
        seats: "Parishioners",
        age: "All ages",
        highlights: [
            "Baptism of infants and adults",
            "First Holy Communion & Confirmation",
            "Marriage preparation and celebration",
            "Anointing of the Sick on request"
        ],
        content: `
            <h5 class="text-navy mb-3">About</h5>
            <p>The sacraments mark every milestone of Christian life — from the waters of Baptism to the vows of Marriage. Our parish celebrates them with reverence, preparation and joy.</p>

            <h5 class="text-navy mb-3">Preparation</h5>
            <ul>
                <li>Baptisms are celebrated on Sundays; kindly register at the parish office in advance.</li>
                <li>Couples preparing for Marriage are requested to meet the Parish Priest at least three months beforehand.</li>
                <li>The Anointing of the Sick is available anytime — contact the parish office in case of need.</li>
            </ul>
        `
    },
    catechism: {
        title: "Catechism",
        tagline: "Sunday Faith Formation",
        duration: "Sundays · after the 9:30 AM Mass",
        seats: "Children & youth",
        age: "4 – 18 years",
        highlights: [
            "Sunday classes for all age groups",
            "First Holy Communion preparation",
            "Confirmation preparation",
            "Bible study and value education"
        ],
        content: `
            <h5 class="text-navy mb-3">About</h5>
            <p>Our Sunday Catechism nurtures the faith of the next generation. Children and youth gather every Sunday to learn the Word of God, the life of the Church, and the values of Christian living.</p>

            <h5 class="text-navy mb-3">Sacraments of Initiation</h5>
            <p>Special preparation classes are held for children receiving First Holy Communion and Confirmation, involving both the students and their parents.</p>
        `
    },
    choir: {
        title: "Choir & Liturgy",
        tagline: "Voices Raised in Praise",
        duration: "Sundays & feast days",
        seats: "Open to all",
        age: "All ages",
        highlights: [
            "Sunday and feast-day choir",
            "Altar servers ministry",
            "Lectors and Eucharistic ministers",
            "Liturgical decoration team"
        ],
        content: `
            <h5 class="text-navy mb-3">About</h5>
            <p>Music and reverent liturgy beautify every celebration at Lourde Matha Church. Our choir leads the congregation in hymns and psalms, while altar servers, lectors and ministers assist at the altar.</p>

            <h5 class="text-navy mb-3">Join Us</h5>
            <p>Anyone with a love for sacred music or a desire to serve at the altar is welcome. Speak to the choir master after Sunday Mass.</p>
        `
    },
    prayer_groups: {
        title: "Prayer Groups",
        tagline: "Legion of Mary · Rosary Groups",
        duration: "Wednesdays & Saturdays · 6:15 PM",
        seats: "Open to all",
        age: "All ages",
        highlights: [
            "Legion of Mary weekly meetings",
            "Family rosary units",
            "Novena to Our Lady of Lourdes",
            "Intercessory prayer for the sick"
        ],
        content: `
            <h5 class="text-navy mb-3">About</h5>
            <p>Prayer is the heartbeat of our parish. The Legion of Mary, rosary groups and family prayer units keep the flame of devotion burning — visiting the sick, praying for families, and growing in Marian spirituality.</p>

            <h5 class="text-navy mb-3">Lourdes Novena</h5>
            <p>On the 11th of every month, the parish gathers for the Novena to Our Lady of Lourdes at 5:30 PM, seeking her powerful intercession.</p>
        `
    },
    youth_family: {
        title: "Youth, Family & Outreach",
        tagline: "Fellowship in Service",
        duration: "Monthly gatherings",
        seats: "Open to all",
        age: "All ages",
        highlights: [
            "Youth fellowship and retreats",
            "Women's association",
            "Charitable outreach to the needy",
            "Parish feast and cultural programmes"
        ],
        content: `
            <h5 class="text-navy mb-3">About</h5>
            <p>Our youth fellowship, women's association and family groups build bonds of friendship and faith. Together they organise retreats, cultural programmes and the annual parish feast.</p>

            <h5 class="text-navy mb-3">Outreach</h5>
            <p>In the spirit of Christian charity, the parish reaches out to the poor and the suffering — through food assistance, medical help and visits to the lonely.</p>
        `
    }
};

window.COURSE_DATA = COURSE_DATA;
