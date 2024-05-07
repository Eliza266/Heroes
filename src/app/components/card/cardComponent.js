export class CardComponent extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = /* html */ `
        <style rel="stylesheet"> 
            @import "css/bootstrap/bootstrap.min.css";
            @import "./src/app/components/card/cardStyle.css";
        </style>
            <div class="card" style="width: 18rem;">
                <img src="" class="card-img-top" alt="..." >
                <div class="card-body">
                    <h5 class="card-title"><slot name="nombre"></slot></h5>
                    <p class="card-text"><slot name="desc"></slot></p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><slot name="producer"></slot></li>
                    <li class="list-group-item"><slot name="date"></slot></li>
                </ul>
          </div>
        
        `;
    const imgElement = this.shadowRoot.querySelector(".card-img-top");
    const assignedNodes = this.querySelectorAll('[slot="img"]');
    if (assignedNodes.length > 0) {
      const imgSrc = assignedNodes[0].getAttribute("src");
      imgElement.src = imgSrc;
    }
  }
}

customElements.define("card-component", CardComponent);
