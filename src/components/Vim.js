import React, { Component } from 'react';

class Vim extends Component {
  render() {
    return (
      <div>
        <p>These are steps you can take to configure your vim to make it look 
        prettier and improve file browsing. You will also find tips on how to set up your .vimrc file plugins.vim file.</p>

        <section className="section">
            <h1><strong>1. Making Vim Prettier</strong></h1>
            <br />
            <p>Inside your .vim directory make a directory called "colors"</p>
            <br />
            <div class="notification">
                cd ~/.vim
                <p>mkdir colors</p>
                <p>wget https://raw.githubusercontent.com/gosukiwi/vim-atom-dark/master/colors/atom-dark-256.vim</p>
            </div>
        </section>

        <section className="section">
            <h1><strong>2. Your .vimrc file</strong></h1> 
            <br />
            <p>Paste <a href="https://gist.githubusercontent.com/pranayaryal/95cd000b91c7b841cbf0b63d82f7f588/raw/577817f3222f976642bdac9da2812c9497640869/new_gist_file_0" target="_blank">this code</a> inside your .vimrc file</p>
        </section>

        <section className="section">
            <h1><strong>3. Make a file inside ~/.vim named plugins.vim</strong></h1> 
            <br />
            <div className="notification">
                cd ~/.vim
                <p>touch plugins.vim</p> 
            </div>
        </section>

        <section className="section">
            <h1><strong>4. Install a Plugin Manager like Vundle</strong></h1> 
            <br />
            <p>Type this in your terminal</p>
            <div className="notification">
                git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim
            </div>
        </section>

        <section className="section">
            <h1><strong>5. Your ~/.vim/plugins.vim file</strong></h1> 
            <br />
            <p>Paste <a href="https://gist.githubusercontent.com/pranayaryal/010cdee74b705092fb0b516fe880e472/raw/d1546ae6611e80e195d389859e5700effa24833f/new_gist_file_0"
                target="_blank" 
            >this code</a> inside plugins.vim</p>
            <p>Then install the plugins using this command inside the ~/.vim/plugins.vim file</p>
            <div className="notification">
                :PluginInstall
            </div>
            <br />
            This should install all your plugins
        </section>

        <section className="section">
            <h1><strong>6. Download ctags</strong></h1> 
            <br />
            <p>Then type this in the project you want to be searchable. You might have to create a tags/ directory in your project</p>
            <div className="notification">
                ctags -R
            </div>
            <br />
            <p>I hope this helps</p>
        </section>

      </div>
    );
  }
}

export default Vim;
