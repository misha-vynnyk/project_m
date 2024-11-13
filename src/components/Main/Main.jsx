import Sidebar from "../Sidebar/Sidebar";
import { MainContent, MainStyled } from "./Main.styled";
import PropTypes from "prop-types";

export default function Main({ isSidebarOpen }) {
  return (
    <MainStyled>
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <MainContent $isSidebarOpen={isSidebarOpen}>
        <section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          temporibus ut perferendis placeat omnis dolores alias saepe modi,
          similique tempore itaque laboriosam molestias dicta porro accusantium
          in eaque recusandae tenetur quo debitis! Modi animi quam ratione iure
          molestias ipsum perspiciatis eius consectetur, delectus suscipit. Et
          nisi maiores nulla atque voluptatem.
        </section>
        <section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          temporibus ut perferendis placeat omnis dolores alias saepe modi,
          similique tempore itaque laboriosam molestias dicta porro accusantium
          in eaque recusandae tenetur quo debitis! Modi animi quam ratione iure
          molestias ipsum perspiciatis eius consectetur, delectus suscipit. Et
          nisi maiores nulla atque voluptatem.
        </section>
        <section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          temporibus ut perferendis placeat omnis dolores alias saepe modi,
          similique tempore itaque laboriosam molestias dicta porro accusantium
          in eaque recusandae tenetur quo debitis! Modi animi quam ratione iure
          molestias ipsum perspiciatis eius consectetur, delectus suscipit. Et
          nisi maiores nulla atque voluptatem.
        </section>
        <section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          temporibus ut perferendis placeat omnis dolores alias saepe modi,
          similique tempore itaque laboriosam molestias dicta porro accusantium
          in eaque recusandae tenetur quo debitis! Modi animi quam ratione iure
          molestias ipsum perspiciatis eius consectetur, delectus suscipit. Et
          nisi maiores nulla atque voluptatem.
        </section>
        <section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          temporibus ut perferendis placeat omnis dolores alias saepe modi,
          similique tempore itaque laboriosam molestias dicta porro accusantium
          in eaque recusandae tenetur quo debitis! Modi animi quam ratione iure
          molestias ipsum perspiciatis eius consectetur, delectus suscipit. Et
          nisi maiores nulla atque voluptatem.
        </section>
        <section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          temporibus ut perferendis placeat omnis dolores alias saepe modi,
          similique tempore itaque laboriosam molestias dicta porro accusantium
          in eaque recusandae tenetur quo debitis! Modi animi quam ratione iure
          molestias ipsum perspiciatis eius consectetur, delectus suscipit. Et
          nisi maiores nulla atque voluptatem.
        </section>
      </MainContent>
    </MainStyled>
  );
}

Main.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
};
