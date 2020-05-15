window.addEventListener('DOMContentLoaded',function () {
	var targetNode = document.getElementById('remotes');
	// Options for the observer (which mutations to observe)
	var config = { childList: true };
  
	// Callback function to execute when mutations are observed
	var callback = function(mutationsList, observer) {
	    for(var mutation of mutationsList) {
	        if (mutation.type == 'childList') {
            var count = document.getElementById('grid').childElementCount;
            var container = document.getElementById('remotes');
            // console.log('Resize Grid! New Element Count:',count);
            if(count > 7) {
              container.style["grid-template-columns"] = "repeat(auto-fit, minmax(320px, 1fr))"
            } else if(count > 3) {
              container.style["grid-template-columns"] = "repeat(auto-fit, minmax(400px, 1fr))"
            } else if(count > 1) {
              container.style["grid-template-columns"] = "repeat(auto-fit, minmax(320px, 1fr))"
            } else if (count == 1) {
              container.style["grid-template-columns"] = "repeat(auto-fit, minmax(320px, 1fr))"
            } else if (count == 0) {
             console.log('no participants');
            }
	        }
	    }
	};

	// Create an observer instance linked to the callback function
	var observer = new MutationObserver(callback);

	// Start observing the target node for configured mutations
	observer.observe(targetNode, config);



    });
