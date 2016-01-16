


$('li').click(function() {

	$(this).animate({
		opacity: 0.5,
		paddingLeft:'+=80'
	},500,function(){
	$(this).remove()

})
})

$('body').RainSnow({
effect_name: 'snow',
drop_appear_speed: 100,
drop_falling_speed: 7000,
wind_direction: 3,
drop_rotate_angle : '-10deg',
drop_count_width_height:[[2,2], [3,3], [4,4], [5,5], [6,6]],
drop_left_to_right : false
});
});



