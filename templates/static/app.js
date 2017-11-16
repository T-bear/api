car source = new EventSource("{{ url_for('sse.stream') }}");
source.addEventListener('greeting', function(event) {

	var data = JSON.parse(event.data);

}, false);
