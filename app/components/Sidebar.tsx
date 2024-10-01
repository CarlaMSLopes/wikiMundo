import React from "react";
import Checkbox from "./Checkbox";

const Sidebar = () => {
  return (
    <aside>
      <div>
        <h1>Região</h1>
        
        <Checkbox labelName="África"/>

        <div>
          <input type="checkbox" name="" id="" />
          <label>África</label>
          <div className="hidden">
            <div>
              <input type="checkbox" name="" id="" />
              <label>África do Norte</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label>África Ocidental</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label>África Central</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label>África Oriental</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label>África Austral</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label>África Insular</label>
            </div>
          </div>
        </div>
        <div>
          <input type="checkbox" name="" id="" />
          <label>América</label>
          <div className="hidden">
            <div>
              <input type="checkbox" name="" id="" />
              <label>América do Norte</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label>América Central</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label>América do Sul</label>
            </div>
          </div>
        </div>
        <div>
          <input type="checkbox" name="" id="" />
          <label>Ásia</label>
          <div className="hidden">
            <div>
              <input type="checkbox" name="" id="" />
              <label>Ásia Central</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label>Ásia Oriental</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label>Sudeste Asiático</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label>Sul da Ásia</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label>Ásia Ocidental</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label>Ásia do Norte</label>
            </div>
          </div>
        </div>
        <div>
          <input type="checkbox" name="" id="" />
          <label>Europa</label>
          <div className="hidden">
            <div>
              <input type="checkbox" name="" id="" />
              <label>Europa Setentrional</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label>Europa Ocidental</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label>Europa Meridional</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label>Europa Oriental</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label>Europa Central</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label>Europa Sudeste</label>
            </div>
          </div>
        </div>
        <div>
          <input type="checkbox" name="" id="" />
          <label>Oceania</label>
          <div className="hidden">
            <div>
              <input type="checkbox" name="" id="" />
              <label>Australásia</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label>Melanésia</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label>Micronésia</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label>Polinésia</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label>Ilhas do Pacífico</label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
