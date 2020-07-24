const   FS              = require('fs'),
        HTTP            = require('http'),
        URL             = require('url'),
        replaceTemplate = require(`./modules/replaceTemplate`),
        slugify         = require('slugify'),
        PORT            = 8000;

const TEMPLATE_OVERVIEW = FS.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const TEMPLATE_CARD = FS.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const TEMPLATE_PRODUCT = FS.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');

const DATA = FS.readFileSync(`${__dirname}/dev-data/productData.json`, 'utf-8');
const PRODUCT_DATA = JSON.parse(DATA);

const slugs = PRODUCT_DATA.map(el => slugify(el.productName, { lower: true }));
// console.log(slugs);

// SERVER
const SERVER = HTTP.createServer((req, res) => {
    const { query, pathname } = URL.parse(req.url, true);
    console.log(query.id);

    switch (pathname) {
        case "/":
        case "/overview":
            res.writeHead(200, {
                "Content-type": "text/html"
            });

            const CARDS_HTML = PRODUCT_DATA.map(el => replaceTemplate(TEMPLATE_CARD, el)).join("");
            const OUTPUT = TEMPLATE_OVERVIEW.replace("{%PRODUCT_CARDS%}", CARDS_HTML);
            res.end(OUTPUT);
            break;
        case "/product":
            res.writeHead(200, {
                "Content-type": "text/html"
            });
            const PRODUCT_OUTPUT = replaceTemplate(TEMPLATE_PRODUCT, PRODUCT_DATA[query.id]);
            res.end(PRODUCT_OUTPUT);
            break;
        case "/api":
            res.writeHead(200, {
                "Content-type": "application/json"
            });
            res.end(DATA);
            break;
        default:
            res.writeHead(404);
            res.end("Sorry! Wrong URL!");
            break;
    }
});

SERVER.listen(PORT, "127.0.0.1", () => {
    console.log(`Server is listening on port ${PORT}`);
});