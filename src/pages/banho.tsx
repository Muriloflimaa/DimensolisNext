import { fauna } from "../services/db";
import { query as q } from "faunadb";

export default function Banho({ data }: any) {
    return (
        <>
            <div className="flex flex-col gap-4 items-center">
                <div className="flex w-full">
                    <div className="flex flex-col">
                        <h1 className="text-primary-content text-5xl font-bold leading-tight">
                            Calculadora de Aquecedor solar Residencial
                        </h1>
                        <p className="text-sm text-gray-400 mt-4">
                            Para simular o tamanho de um sistema de aquecimento
                            solar, utilize a Calculadora de Aquecedor Solar
                            Dimensolis. Basta preencher os campos abaixo,
                            informar seu nome e email e clicar em calcular. Para
                            solicitar um orçamento, clique no botão do whats app
                            no rodapé da página. Preencha os campos abaixo com
                            todos os dados para simular o consumo mensal e os
                            equipamentos necessários.
                        </p>

                        <form action="" className="mt-6 flex flex-col gap-8">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-primary-content text-xs">
                                            Digite seu nome
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        className="input input-ghost w-full"
                                    />
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-primary-content text-xs">
                                            Digite seu e-mail
                                        </span>
                                    </label>
                                    <input
                                        type="email"
                                        className="input input-ghost w-full"
                                    />
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-primary-content text-xs">
                                            Selecione o estado
                                        </span>
                                    </label>
                                    <select
                                        defaultValue="1"
                                        className="select select-ghost"
                                    >
                                        <option value={1} disabled>
                                            ...
                                        </option>

                                        {data?.data.map((response: any) => {
                                            return (
                                                <option
                                                    key={response.state}
                                                    value={response.state}
                                                >
                                                    {response.state}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-primary-content text-xs">
                                            Selecione a cidade
                                        </span>
                                    </label>
                                    <select
                                        defaultValue={1}
                                        className="select select-ghost"
                                    >
                                        <option value={1} disabled selected>
                                            Pick one
                                        </option>
                                        <option value={2}>Star Wars</option>
                                        <option value={3}>Harry Potter</option>
                                        <option value={4}>
                                            Lord of the Rings
                                        </option>
                                        <option value={5}>
                                            Planet of the Apes
                                        </option>
                                        <option value={6}>Star Trek</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex gap-3 w-full">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-primary-content text-xs">
                                            Tipo de clima
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        className="input input-ghost w-full"
                                    />
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-primary-content text-xs">
                                            Número de pessoas
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        className="input input-ghost w-full"
                                    />
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-primary-content text-xs">
                                            Número de banhos / pessoa / dia
                                        </span>
                                    </label>
                                    <select
                                        defaultValue={1}
                                        className="select select-ghost"
                                    >
                                        <option value={1} disabled selected>
                                            Pick one
                                        </option>
                                        <option value={2}>Star Wars</option>
                                        <option value={3}>Harry Potter</option>
                                        <option value={4}>
                                            Lord of the Rings
                                        </option>
                                        <option value={5}>
                                            Planet of the Apes
                                        </option>
                                        <option value={6}>Star Trek</option>
                                    </select>
                                </div>
                            </div>
                            <h1 className="text-primary-content text-2xl font-bold">
                                Onde haverá consumo de água quente?
                            </h1>
                            <div className="flex justify-between">
                                <div className="flex gap-3 w-full justify-start">
                                    <div>
                                        <div className="form-control ">
                                            <label className="label justify-start gap-2 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    className="checkbox checkbox-accent"
                                                />
                                                <span className="label-text text-xl ">
                                                    Ducha
                                                </span>
                                            </label>
                                        </div>
                                        <div className="form-control ">
                                            <label className="label justify-start gap-2 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    className="checkbox checkbox-accent"
                                                />
                                                <span className="label-text text-xl ">
                                                    Ducha higiênica
                                                </span>
                                            </label>
                                        </div>
                                        <div className="form-control ">
                                            <label className="label justify-start  gap-2 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    className="checkbox checkbox-accent"
                                                />
                                                <span className="label-text text-xl ">
                                                    Cozinha
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="form-control ">
                                            <label className="label justify-start gap-2 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    className="checkbox checkbox-accent"
                                                />
                                                <span className="label-text text-xl ">
                                                    Lavatório
                                                </span>
                                            </label>
                                        </div>
                                        <div className="form-control ">
                                            <label className="label justify-start gap-2 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    className="checkbox checkbox-accent"
                                                />
                                                <span className="label-text text-xl ">
                                                    Banheira
                                                </span>
                                            </label>
                                        </div>
                                        <div className="form-control">
                                            <label className="label justify-start gap-2 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    className="checkbox checkbox-accent"
                                                />
                                                <span className="label-text text-xl ">
                                                    Lavanderia
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-control gap-2 grid grid-cols-1 items-end">
                                    <button className="btn btn-warning text-xs">
                                        Calcular
                                    </button>
                                    <button className="btn btn-warning text-xs">
                                        Solicitar Orçamento
                                    </button>
                                </div>
                            </div>
                            <div className="mt-10">
                                <span className="w-full text-sm text-black">
                                    Observações: <br /> 1 - O dimensionamento
                                    acima é uma sugestão e pode sofrer
                                    alterações dependendo do perfil de consumo
                                    de água quente, condições climáticas e
                                    condições de instalação; <br /> 2 - O
                                    dimensionamento acima levou em consideração
                                    as condições ideais de instalação conforme
                                    ABNT NBR 15569/2020.
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export async function getStaticProps() {
    try {
        const { data }: any = await fauna.query(
            q.Get(q.Ref(q.Collection("states"), "342447823857386065"))
        );
        return {
            props: {
                data,
            },
            revalidate: 60 * 60 * 24 * 30,
        };
    } catch (error) {
        return {
            props: {
                data: null,
            },
        };
    }
}
