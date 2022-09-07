import { observer } from "mobx-react-lite";
import Header from "../components/header";
import persons from "../store/persons"
import TransportRequestRegistryForm from "../components/transport/registry-form";
import transport from "../store/transport";

const TransportRequestRegistryPage: React.FC = () => {
    return (
      <>
        <Header />
        <TransportRequestRegistryForm   transportRegistry={transport.getAll()}
                                        personById={persons.getById.bind(persons)}
                                        title="Реестр заявок на транспорт"
        />
      </>
      
      )
  }
    
export default observer(TransportRequestRegistryPage);