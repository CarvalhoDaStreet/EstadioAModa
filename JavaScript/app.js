document.addEventListener('DOMContentLoaded',Start);

var camara;
var camara2;	
var cena;
var cena2;
var renderer;
var camaraSelecionada=1;

var light;
var light2;
var escolha_light = 1;
var escolha_light2 = 1;

var mixerAnimacao;
var relogio;

// relva
const field_geometria  = new THREE.BoxGeometry(13.8, 5, 0.2,0.5,0.5,0.5);
const field_material = new THREE.MeshLambertMaterial( {color: 0xb5e550, side: THREE.DoubleSide} );
const field = new THREE.Mesh( field_geometria, field_material );
field.rotateX(-0.8);


// base da relva
const field_base_geometria  = new THREE.BoxGeometry(14.6, 5, 0.2,0.5,0.5,0.5);
const field_base_material = new THREE.MeshLambertMaterial( {color: 0x633200, side: THREE.DoubleSide} );
const field_base = new THREE.Mesh( field_base_geometria, field_base_material );
field_base.rotateX(-0.8);
field_base.position.y = -0.2;

// linha lateral baixo
const field_linha_baixo_geometria = new THREE.PlaneGeometry( 8.6, 0.06 );
const field_linha_baixo_material = new THREE.MeshLambertMaterial( {color: 0xFFFFFF, side: THREE.DoubleSide} );
const field_linha_baixo = new THREE.Mesh( field_linha_baixo_geometria, field_linha_baixo_material );
field_linha_baixo.rotateX(-0.8);
field_linha_baixo.position.y = -1;
field_linha_baixo.position.z = 3; 

// linha lateral cima
const field_linha_cima_geometria = new THREE.PlaneGeometry( 6.8, 0.06 );
const field_linha_cima_material = new THREE.MeshLambertMaterial( {color: 0xFFFFFF, side: THREE.DoubleSide} );
const field_linha_cima = new THREE.Mesh( field_linha_cima_geometria, field_linha_cima_material );
field_linha_cima.rotateX(-0.8);
field_linha_cima.position.y = 0.8;
field_linha_cima.position.z = 2; 

// linha lateral esquerda
const field_linha_esquerda_geometria = new THREE.PlaneGeometry(0.06, 3.6);
const field_linha_esquerda_material = new THREE.MeshLambertMaterial( {color: 0xFFFFFF, side: THREE.DoubleSide} );
const field_linha_esquerda = new THREE.Mesh( field_linha_esquerda_geometria, field_linha_esquerda_material );
field_linha_esquerda.rotateX(-0.8);
field_linha_esquerda.position.x = -5.3;
field_linha_esquerda.position.z = 1;


// linha lateral direita
const field_linha_direita_geometria = new THREE.PlaneGeometry(0.06, 3.6);
const field_linha_direita_material = new THREE.MeshLambertMaterial( {color: 0xFFFFFF, side: THREE.DoubleSide} );
const field_linha_direita = new THREE.Mesh( field_linha_direita_geometria, field_linha_direita_material );
field_linha_direita.rotateX(-0.8);
field_linha_direita.position.x = 5.3;
field_linha_direita.position.z = 1;

// linha central
const field_linha_central_geometria = new THREE.PlaneGeometry(0.06, 3.6);
const field_linha_central_material = new THREE.MeshLambertMaterial( {color: 0xFFFFFF, side: THREE.DoubleSide} );
const field_linha_central = new THREE.Mesh( field_linha_central_geometria, field_linha_central_material );
field_linha_central.rotateX(-0.8);
field_linha_central.position.x = 0;
field_linha_central.position.z = 1;


//ponto central
const field_circle_geometry = new THREE.CircleGeometry( 0.20, 90 );
const field_circle_material = new THREE.MeshLambertMaterial( { color: 0xffffff } );
const field_circle = new THREE.Mesh( field_circle_geometry, field_circle_material );
field_circle.rotateX(-0.8);
field_circle.position.y = -0.2;
field_circle.position.z = 1;

// bancada1
const bancada_geometria  = new THREE.BoxGeometry(7.5, 1, 0.1,0.5,0.5,0.5);
const bancada_material = new THREE.MeshLambertMaterial( {color: 0xe9d700, side: THREE.DoubleSide} );
const bancada = new THREE.Mesh( bancada_geometria, bancada_material );
bancada.rotateX(-0.8);
bancada.position.y = 1.55;
bancada.position.z = 0.7;

// bancada2
const bancada2_geometria  = new THREE.BoxGeometry(6, 1, 0.2,0.5,0.5,0.5);
const bancada2_material = new THREE.MeshLambertMaterial( {color: 0xf8ed62, side: THREE.DoubleSide} );
const bancada2 = new THREE.Mesh( bancada2_geometria, bancada2_material );
bancada2.rotateX(-0.8);
bancada2.position.y = 2;
bancada2.position.z = 0.7;

// bancada3
const bancada3_geometria  = new THREE.BoxGeometry(4, 1, 0.2,0.5,0.5,0.5);
const bancada3_material = new THREE.MeshLambertMaterial( {color:0xe9d700, side: THREE.DoubleSide} );
const bancada3 = new THREE.Mesh( bancada3_geometria, bancada3_material );
bancada3.rotateX(-0.8);
bancada3.position.y = 2.53;
bancada3.position.z = 0.7;

// holofote
const holofote_geometria  = new THREE.CylinderGeometry(0.1,0.1,2.3,32);
const holofote_material = new THREE.MeshLambertMaterial( {color:0x989898, side: THREE.DoubleSide} );
const holofote = new THREE.Mesh( holofote_geometria, holofote_material );
holofote.rotateX(-0.6);
holofote.rotateY(4.7);
holofote.rotateZ(2);
holofote.position.x = -5.5;
holofote.position.y = 2.45;
holofote.position.z = 0.2;

// cubo holofote
const cubo_holofote_geometria  = new THREE.BoxGeometry(0.8,0.8, 0.2,0.5,0.5,0.5);
const cubo_holofote_material = new THREE.MeshLambertMaterial( {color:0x989898, side: THREE.DoubleSide} );
const cubo_holofote = new THREE.Mesh( cubo_holofote_geometria, cubo_holofote_material );
cubo_holofote.rotateX(0.5);
cubo_holofote.position.x = -5.5;
cubo_holofote.position.y = 3.5;
cubo_holofote.position.z = 0.9;


// holofote direita
const holofote_direita_geometria  = new THREE.CylinderGeometry(0.1,0.1,2.3,32);
const holofote_direita_material = new THREE.MeshLambertMaterial( {color:0x989898, side: THREE.DoubleSide} );
const holofote_direita = new THREE.Mesh( holofote_direita_geometria, holofote_direita_material );
holofote_direita.rotateX(-0.9);
holofote_direita.rotateY(4.7);
holofote_direita.rotateZ(2);
holofote_direita.position.x = 5.2;
holofote_direita.position.y = 2.45;
holofote_direita.position.z = 0.2;

// cubo holofote direita
const cubo_holofote_direita_geometria  = new THREE.BoxGeometry(0.8,0.8, 0.2,0.5,0.5,0.5);
const cubo_holofote_direita_material = new THREE.MeshLambertMaterial( {color:0x989898, side: THREE.DoubleSide} );
const cubo_holofote_direita = new THREE.Mesh( cubo_holofote_direita_geometria, cubo_holofote_direita_material );
cubo_holofote_direita.rotateX(0.2);
cubo_holofote_direita.position.x = 5.2;
cubo_holofote_direita.position.y = 3.8;
cubo_holofote_direita.position.z = 0.5;



var cuboCoordRotation;
var camaraAndar = {x:0, y:0, z:0};
var velocidadeAndar = 0.05;

var objetoImportado;
var bolaImportada;
var bolaSaltaImportada;
var balizaDireitaImportada;
var balizaEsquerdaImportada;

var mixerAnimacao;


function Start(){

    criarCena();
    update();
}

function criarCena(){
    cena = new THREE.Scene();
    camara = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, 0.01, 2000);
    camara2 = new THREE.OrthographicCamera(window.innerWidth / -130, window.innerWidth / 130, window.innerHeight / 230, window.innerHeight / -300, 1, 2000);
    renderer = new THREE.WebGLRenderer({alpha:true});
    renderer.setSize(window.innerWidth - 23, window.innerHeight - 23);
    document.body.appendChild(renderer.domElement);
    renderer.antialias = true;


    cena.background = new THREE.Color(0xadd8e6);
    
    camara.position.z = 6;
    camara2.position.z = 6;
   

    CampoGroup();
    addBalizaEsquerda();
    addBalizaDireita();   
    addBola();
    addSound();
    
    
}

function addSound(){
    const listener = new THREE.AudioListener();
    camara.add( listener );


    const sound = new THREE.Audio( listener );


    const audioLoader = new THREE.AudioLoader();
    audioLoader.load('./sounds/stadium.mp3', function( buffer ) {
	sound.setBuffer( buffer );
	sound.setLoop( true );
	sound.setVolume( 0.5 );
	sound.play();
});
}

function addSoundWhistle(){
    const listener = new THREE.AudioListener();
    camara.add( listener );


    const sound = new THREE.Audio( listener );


    const audioLoader = new THREE.AudioLoader();
    audioLoader.load('./sounds/whistle.mp3', function( buffer ) {
	sound.setBuffer( buffer );
	sound.setLoop( true );
	sound.setVolume( 0.5 );
	sound.play();
});
}

var baliza_esquerda;
function addBalizaEsquerda(){
    
    var importer = new THREE.FBXLoader();
    importer.load('./Objetos/net2.fbx', function (baliza_esquerda) {
        
    
        baliza_esquerda.traverse(function (child){
            if (child.isMesh){
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
    
        cena.add(baliza_esquerda);
        
        baliza_esquerda.scale.x = 0.004;
        baliza_esquerda.scale.z = 0.0025;
        baliza_esquerda.scale.y = 0.007;
    
       
            baliza_esquerda.position.x = -6.6;
            baliza_esquerda.position.z = 0.3;
            baliza_esquerda.rotateX(0.8);
       
            balizaEsquerdaImportada = baliza_esquerda;
    
    });
    }

   
var baliza_direita;
function addBalizaDireita(){
    
        var importer = new THREE.FBXLoader();
        importer.load('./Objetos/net2.fbx', function (baliza_direita) {


            baliza_direita.traverse(function (child) {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });

            cena.add(baliza_direita);

            baliza_direita.scale.x = 0.004;
            baliza_direita.scale.z = 0.0025;
            baliza_direita.scale.y = 0.007;

            baliza_direita.position.x = 6.6;
            baliza_direita.position.z = 0.3;
            baliza_direita.rotateX(0.8);
            baliza_direita.rotateY(3.1);

            balizaDireitaImportada = baliza_direita;

        });
}

var bola;
function addBola(){
    
        relogio= new THREE.Clock();
        var importer = new THREE.FBXLoader();
        importer.load('./Objetos/ball.fbx', function (bola) {
            mixerAnimacao=new THREE.AnimationMixer(bola);
			var action=mixerAnimacao.clipAction(bola.animations[0]);
			action.play();

            bola.traverse(function (child) {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });

            cena.add(bola);

           
            bola.scale.x = 0.0003;
            bola.scale.z = 0.0003;
            bola.scale.y = 0.0003;

            bola.position.x = 0;
            bola.position.z = 1.5;
            

            bolaImportada = bola;

        });
}

var bolaSalta;
function addBolaSalta(){
    
        relogio= new THREE.Clock();
        var importer = new THREE.FBXLoader();
        importer.load('./Objetos/ball.fbx', function (bolaSalta) {
            mixerAnimacao=new THREE.AnimationMixer(bolaSalta);
			var action=mixerAnimacao.clipAction(bolaSalta.animations[1]);
			action.play();

            bolaSalta.traverse(function (child) {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });

            cena.add(bolaSalta);

           
            bolaSalta.scale.x = 0.0004;
            bolaSalta.scale.z = 0.0004;
            bolaSalta.scale.y = 0.0004;

            bolaSalta.position.x = 0;
            bolaSalta.position.z = 1.5;
            

            bolaSaltaImportada = bolaSalta;
            cena.remove(bolaImportada);

        });
}

function addPointLight(){

    if(escolha_light ==  1){

    light2= new THREE.PointLight(0x404040,8,100,1);
    light2.position.set( 0.2, 20, 1 );
    light2.lookAt(cubo_holofote_direita);
    cena.add(light2);
    escolha_light = 2;
    }else{
        cena.remove(light2);
        escolha_light = 1;
    }

}

function addAmbientLight(){

    if(escolha_light2 ==  2){

    light= new THREE.AmbientLight(0x404040,4);
    light.position.set( 0.2, 20, 1 );
    light.lookAt(holofote);
    cena.add(light);
    escolha_light2 = 1;
    }else{
        cena.remove(light);
        escolha_light2 = 2;
    }

}

function checkPosition(){
    if(bolaImportada.position.x = -5.3){
        addSoundWhistle()
    }else if(bolaImportada.position.x = 5.3){
        addSoundWhistle()
    }else if(bolaImportada.position.y = 0.70){
        addSoundWhistle()
    }else if(bolaImportada.position.y = -1.29){
        addSoundWhistle()
    }
}

function CampoGroup(){

    var group = new THREE.Group();
    group.add(field);
    group.add(field_base);
    group.add(field_linha_baixo);
    group.add(field_linha_cima);
    group.add(field_linha_esquerda);
    group.add(field_linha_direita);
    group.add(field_linha_central);
    group.add(field_circle);
    group.add(bancada);
    group.add(bancada2);
    group.add(bancada3);
    group.add(holofote);
    group.add(holofote_direita);
    group.add(cubo_holofote);
    group.add(cubo_holofote_direita);

    cena.add(group);

    //addPointLight();
    //addAmbientLight();
}

document.addEventListener('keydown',ev=>{
    if(ev.keyCode === 37 && bolaImportada.position.x >= -5.3){
        bolaImportada.position.x -= 0.1;
        bolaSaltaImportada.position.x -= 0.1;
    }else if(ev.keyCode === 39 && bolaImportada.position.x <= 5.3){
        bolaImportada.position.x += 0.1;
    }else if(ev.keyCode === 38 && bolaImportada.position.y <= 0.70){
        bolaImportada.position.y += 0.1;
    }else if(ev.keyCode === 40 && bolaImportada.position.y >= -1.29){
        bolaImportada.position.y -= 0.1;
    }
});




function alternarCamara()
	{
		if(camaraSelecionada==1)
		{
			camaraSelecionada=2;
		}
		else{
			camaraSelecionada=1;
		}
	}

function update(){
    if(mixerAnimacao)
		{
			mixerAnimacao.update(relogio.getDelta());
		}
    render();
    requestAnimationFrame(update);
}

function render(){


    if(camaraSelecionada==1)
    {
        renderer.render(cena, camara);
    }
    else{
        renderer.render(cena, camara2);
    }
    
}


