class Comentario(db.Model): 

    id = db.Column(db.Integer, primary_key=True)
    usuario = db.Column(db.String(20))
    texto = db.Column(db.String(250))
    imagen = db.Column(db.String(400))

    def __init__(self, usuario, texto, imagen):
        
        self.usuario = usuario
        self.texto = texto
        self.imagen = imagen

with app.app_context():
    db.create_all()  

class ComentarioSchema(ma.Schema):

    class Meta:
        fields = ("id", "usuario", "texto", "imagen")

comentario_schema = ComentarioSchema() 
comentarios_schema = ComentarioSchema(many=True)

@app.route("/comentarios", methods=["GET"])
def get_Comentarios():

    all_comentarios = Comentario.query.all() 
    result = comentarios_schema.dump(all_comentarios) 
    return jsonify(result) 

@app.route("/comentarios/<id>", methods=["GET"])
def get_comentario(id):
    
    comentario = Comentario.query.get(id) 
    return comentario_schema.jsonify(comentario)

@app.route("/comentarios/<id>", methods=["DELETE"])
def delete_comentario(id):

    comentario = Comentario.query.get(id) 
    db.session.delete(comentario) 
    db.session.commit()  
    return comentario_schema.jsonify(producto)  

@app.route("/comentarios", methods=["POST"]) 
def create_comentario():
    
    usuario = request.json["usuario"] 
    texto = request.json["texto"]
    imagen = request.json["imagen"]  
    new_comentario = Comentario(usuario, texto, imagen) 
    db.session.add(new_comentario) 
    db.session.commit() 
    return comentario_schema.jsonify(new_comentario) 

@app.route("/comentarios/<id>", methods=["PUT"]) 
def update_comentario(id):
    
    comentario = comentario.query.get(id) 

    comentario.usuario = request.json["usuario"]
    comentario.texto = request.json["texto"]
    producto.imagen = request.json["imagen"]

    db.session.commit() 
    return producto_schema.jsonify(comentario) 