import Sidebar from "../Sidebar/Sidebar";
import { MainStyled } from "./Main.styled";
import PropTypes from 'prop-types';

export default function Main({isSidebarOpen}) {
  return (
    <MainStyled>
      <Sidebar isSidebarOpen={isSidebarOpen}/>
    </MainStyled>
  );
}

Main.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
};