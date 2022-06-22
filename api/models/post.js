const db = require('../dbConfig/init');

class Post {
	constructor(data) {
		this.id = data.id;
		this.title = data.title;
		this.name = data.name;
		this.story = data.story;
	};

	static get all() {
		return new Promise (async (resolve, reject) => {
			try {
				let postData = await db.query("SELECT * FROM posts;");
				console.log(postData);
				let posts = postData.rows.map(p => new Post(p));

				resolve(posts);
			} catch (err) {
				reject('Posts not found: ' + err.message);
			};
		});
	};

	static findById(id) {
		return new Promise(async (resolve, reject) => {
			try {
				let postData = await db.query(`SELECT * FROM posts WHERE posts.id = $1`, [ id ]);
				
				let post = new Post(postData.rows[0]);
				resolve (post);
			} catch (err) {
				reject('Post not found: ' + err.message);
			};
		});
	};

	static async create (postData) {
		return new Promise(async (resolve, reject) => {
			try {
				const { title, name, story } = postData;

				let postQuery = await db.query(`INSERT INTO posts (title, name, story) VALUES ($1, $2, $3)`, [title, name, story]);
				let newPost = new Post(postQuery.rows[0]);

				resolve(newPost);	
			} catch (err) {
				reject('Post could not be created: ' + err.message);
			}
		});
	};

};

module.exports = Post;
