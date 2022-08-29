exports.getPost = (req, res) =>{
   res.send('Hello Controller ..!!')
};

exports.getJson = (req, res) =>{
    res.json({
        posts:[
            {title: 'T1'},
            {description: 'D1'}
        ]
    })
 };
 