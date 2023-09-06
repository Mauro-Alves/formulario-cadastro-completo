import React, { useState, useContext } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@mui/material';
import ValidacoesCadastro from '../../contexts/validacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosPessoais({ aoEnviar }) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const validacoes = useContext(ValidacoesCadastro)
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);



    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (possoEnviar()) {
                    aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
                }

            }}
        >
            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
                }}
                onBlur="{validarCampos}"
                error={!erros.nome.valido}
                helperText={erros.nome.texto}
                id="nome"
                name="nome"
                label="Nome"
                variant="outlined"
                fullWidth margin="normal"
            />

            <TextField
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }}
                id="sobrenome"
                nome="sobrenome"
                label='Sobrenome'
                variant="outlined"
                fullWidth
                margin="normal"
            />

            <TextField
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value);
                }}
                onBlur={validarCampos}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="CPF"
                name="cpf"
                label="CPF"
                variant="outlined"
                fullWidth
                margin="normal"
            />

            <FormControlLabel
                label="Promoções"
                control={<Switch
                    checked={promocoes}
                    onChange={(event) => {
                        setPromocoes(event.target.checked)
                    }}
                    name="promocoes"
                    defaultChecked={promocoes}
                    color="primary" />}
            />

            <FormControlLabel
                label="Novidades"
                control={<Switch
                    checked={novidades}
                    onChange={(event) => {
                        setNovidades(event.target.checked)
                    }}
                    name="novidades"
                    defaultChecked={novidades}
                    color="primary" />}
            />

            <Button
                type="submit"
                variant="contained"
                color="primary">
                Próximo
            </Button>
        </form>
    );
}

export default DadosPessoais;