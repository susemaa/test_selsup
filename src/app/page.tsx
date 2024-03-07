'use client'
import React, { ChangeEvent } from 'react';

interface Param {
  id: number;
  name: string;
  type: string;
}

interface ParamValue {
  paramId: number;
  value: string;
}

// interface Color {

// }

interface Model {
  paramValues: ParamValue[];
  // Colors: Color[];
}

interface Props {
  params: Param[];
  model: Model;
}

interface State {
  model: Model;
}

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      model: props.model,
    };
  }

  handleChange = (paramId: number, value: string) => {
    const updatedParamValues = this.state.model.paramValues.map((paramValue) =>
      paramValue.paramId === paramId ? { ...paramValue, value } : paramValue
    );

    this.setState({ model: { ...this.state.model, paramValues: updatedParamValues } });
  };

  getModel = (): Model => {
    return this.state.model;
  };

  render() {
    const { params } = this.props;
    const { paramValues } = this.getModel();

    return (
      <table className="w-full">
      <tbody>
        {params.map((param) => {
          if (param.type === 'string') {
            const paramValue = paramValues.find((p) => p.paramId === param.id);
            return (
              <tr key={param.id} className="mb-4">
                <td className="p-3 text-center font-bold">{param.name}</td>
                <td>
                  <input
                    type="text"
                    value={paramValue ? paramValue.value : ''}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      this.handleChange(param.id, e.target.value)
                    }
                    className="border-2 rounded w-full p-1 focus:outline-none"
                  />
                </td>
              </tr>
            );
          }
          return null;
        })}
        <tr>
          <td colSpan={2} className="text-center align-middle">
            <button
              onClick={() => console.log(this.getModel())}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Вывести модель
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    );
  }
}

export default Home;
