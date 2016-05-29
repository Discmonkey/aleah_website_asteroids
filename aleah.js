$(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          	scrollTop: target.offset().top*.75
	        	}, 1000);
	        	return false;
	     	 }
			}
		});
});


$(window).bind('scroll',function(e){
	parallaxScroll();
});

function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#foregroundContainer').css('top',(0-(scrolled*.25))+'px');
	$('#shallowBackgroundContainer').css('top',(0-(scrolled*.6))+'px');
	$('#deepBackgroundContainer').css('top',(0-(scrolled*.75))+'px');
}

var addRotateClass = function(type) {
	$('.'+type+'FaceFront').click(function() {
		$('#'+type+'Transform').addClass('flipped');
	});

	$('.'+type+'FaceBack').click(function() {
		$('#'+type+'Transform').removeClass('flipped');
	})
}

//document javascript
$(document).ready(function() {
	addRotateClass('about');
	addRotateClass('stories');
	addRotateClass('current');
	addRotateClass('teaching');

	$('.catHeader').mouseover(function(){
		$(this).find('.headerTransform').addClass('flipped');
	}).mouseout(function(){
		$(this).find('.headerTransform').removeClass('flipped');
	});

	$('.navBottom').click(function() {
		var transformID = $(this).attr('href')+'Transform'
		setTimeout(function(){
			$(transformID).addClass('flipped');
		},1100);
	});

	$('.navTop').click(function() {
		var transformID = $(this).attr('href')+'Transform'
		setTimeout(function(){
			$(transformID).removeClass('flipped');
		},1100);
	});

	$('#contactForm').ajaxForm(function() {
		$('#email, #message').val('');
		$('#currentTransform').removeClass('flipped');
	});

	$('#message, #email, #submit, .storyLink').click(function(e) {
		e.stopPropagation();
	});
});



//threejs
$(document).ready(function() {
	var scene = new THREE.Scene();
	var width = 1200;
	var height = 2800;
	var camera = new THREE.PerspectiveCamera( 75, width/height, 0.1, 1000 );

	var renderer = new THREE.WebGLRenderer({alpha: true});
	renderer.setSize( width, height );
	$('#threeJS1').append( renderer.domElement );

	var geomIcosahedron = new THREE.IcosahedronGeometry(2,0);
	var bluePhong = new THREE.MeshPhongMaterial( { color: 0x0000ff } );
	var redPhong = new THREE.MeshPhongMaterial({color: 0xff0000})
	var iso = new THREE.Mesh( geomIcosahedron, bluePhong );
	// var edges = new THREE.EdgesHelper( iso, 0xFFF576 );
	iso.position.set(7,19,-30)
	scene.add(iso);
	// scene.add(edges)

	var geoOctahedron = new THREE.OctahedronGeometry(2,0);
	var oct1 = new THREE.Mesh( geoOctahedron, bluePhong );
	oct1.position.set(-8,13, -30)
	scene.add(oct1);

	var iso2 = new THREE.Mesh( geomIcosahedron, bluePhong );
	iso2.position.set(8, 7,-30)
	scene.add(iso2);

	//light
	var directionalLight = new THREE.DirectionalLight( 0xffffff, 1  );
	directionalLight.position.set( 0, 0, 1 );
	scene.add(directionalLight);

	// var sphere = new THREE.SphereGeometry(5,30,30);
	// var sphereMaterial = new THREE.MeshPhongMaterial();
	// sphereMaterial.map = THREE.ImageUtils.loadTexture('assets/planetMaps/mars_1k_color.jpg');
	// sphereMaterial.bumpMap = THREE.ImageUtils.loadTexture('assets/planetMaps/marsbump1k.jpg');
	// sphereMaterial.bumpScale = .05;
	// var mars = new THREE.Mesh(sphere, sphereMaterial);
	// mars.position.set(7,7,-60);
	// scene.add(mars);

	function render() {
		requestAnimationFrame( render );
		iso.rotation.x += 0.01;
		iso.rotation.y += 0.01;
		oct1.rotation.x += 0.01;
		oct1.rotation.y += 0.01;
		// tet2.rotation.x += 0.01;
		// tet2.rotation.y += 0.01;
		// tet1.rotation.x += 0.01;
		// tet1.rotation.y += 0.01;
		// mars.rotation.y +=.05;
		// mars.position.x -=.1;
		iso2.rotation.x += 0.01;
		iso2.rotation.y += 0.01;
		renderer.render( scene, camera );
	}
	render();

	camera.position.z = 5;

});


