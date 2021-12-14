import React, { Component } from 'react';

class WinningModal extends React.Component {
    render() { 
        return (
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Bravo !</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <div style="width:100%;height:0;padding-bottom:75%;position:relative;"><iframe src="https://giphy.com/embed/l0MYDOPOwIeIR66jK" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/franceinfo-archive-geste-l0MYDOPOwIeIR66jK"></a></p>
              <span>Vous avez réussi.</span>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-primary">Rejouer</button>
            </div>
          </div>
        </div>
      </div>);
    }
}
 
export default WinningModal;