db.createUser(
    {
        user: "qu4lity",
        pwd: "qu4lity",
        roles: [
            {
                role: "readWrite",
                db: "qu4lity"
            }
        ]
    }
);