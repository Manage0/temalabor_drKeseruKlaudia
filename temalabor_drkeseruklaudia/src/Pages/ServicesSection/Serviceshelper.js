    const panels = document.querySelectorAll('.info-panel.wrapper');
  
    const getPanel = function() {
        console.log("getPanel")
      panels.forEach(function(panel) {
        let panelObj = createPanel(panel);
        panelObj.panel.addEventListener('click', function() {
          panelObj.handle_click_event();
        })
      })
    };
  
    const createPanel = function(_panel) {
        console.log("createPanel")
      function Panel() {
        
        this.panel = _panel;
        this.icon = _panel.querySelector('.info-panel.icon');
        this.dropdown = _panel.querySelector('.info-panel.dropdown');
        this.handle_click_event = function() {
          rotateIcon(this.icon)
          togglePanel(this.dropdown, this.panel)
        }
        
        return this;
      };
      return new Panel(_panel)
    };
  
    const rotateIcon = function(icon) {
      icon.classList.toggle('rotate');
    };
  
    const togglePanel = function(dropdown, panel) {
      dropdown.classList.toggle('open');
      panel.classList.toggle('open');
    };

    export {getPanel}