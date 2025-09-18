import React, { useState } from 'react';
import './contato.css';

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  cidade: string;
  investimento: string;
  ambientes: string[];
  horario: string;
  termosAceitos: boolean;
}

const Contato: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    cidade: '',
    investimento: '',
    ambientes: [],
    horario: '',
    termosAceitos: false,
  });

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  const target = e.target as HTMLInputElement;
  const { id, value, type, name } = target;
  const checked = target.checked;


    if (type === 'checkbox' && name === 'ambiente') {
      setFormData((prev) => ({
        ...prev,
        ambientes: checked
          ? [...prev.ambientes, id]
          : prev.ambientes.filter((amb) => amb !== id),
      }));
    } else if (type === 'radio' && name === 'horario') {
      setFormData((prev) => ({ ...prev, horario: id }));
    } else if (id === 'termos') {
      setFormData((prev) => ({ ...prev, termosAceitos: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    try {
      const response = await fetch(`${API_URL}/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Formulário enviado com sucesso! Verifique seu e-mail.');
      } else {
        alert('Erro ao enviar o formulário. Tente novamente.');
      }
    } catch {
      alert('Erro de conexão com o servidor.');
    }
  };

  return (
    <section className="contato-section container py-5">
      <h2 className="text-center mb-4">Solicite seu Projeto</h2>
      <p className="text-center mb-5">
        Preencha o formulário abaixo e nossa equipe entrará em contato com você para criar o ambiente dos seus sonhos.
      </p>

      <form className="row g-4" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="nome" className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="email" className="form-label">E-mail</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="cidade" className="form-label">Cidade</label>
          <input
            type="text"
            className="form-control"
            id="cidade"
            value={formData.cidade}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="telefone" className="form-label">Telefone / WhatsApp</label>
          <input
            type="tel"
            className="form-control"
            id="telefone"
            value={formData.telefone}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="investimento" className="form-label">Expectativa de Investimento</label>
          <select
            className="form-select"
            id="investimento"
            value={formData.investimento}
            onChange={handleChange}
          >
            <option value="">Selecione</option>
            <option value="25mil">Até 25 mil reais</option>
            <option value="50mil">Até 50 mil reais</option>
            <option value="100mil">Acima de 50 mil reais</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">Ambientes desejados</label>
          {['cozinha', 'sala', 'quarto', 'servico', 'banheiro'].map((amb) => (
            <div className="form-check" key={amb}>
              <input
                className="form-check-input"
                type="checkbox"
                id={amb}
                name="ambiente"
                checked={formData.ambientes.includes(amb)}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor={amb}>
                {amb === 'cozinha' && 'Cozinha / Área Gourmet'}
                {amb === 'sala' && 'Home Theater / Sala'}
                {amb === 'quarto' && 'Dormitórios'}
                {amb === 'servico' && 'Áreas de Serviço'}
                {amb === 'banheiro' && 'Banheiros'}
              </label>
            </div>
          ))}
        </div>

        <div className="col-md-12">
          <label className="form-label">Melhor horário para contato</label><br />
          {['manha', 'almoco', 'tarde', 'noite'].map((h) => (
            <div className="form-check form-check-inline" key={h}>
              <input
                className="form-check-input"
                type="radio"
                name="horario"
                id={h}
                checked={formData.horario === h}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor={h}>
                {h === 'manha' && 'Manhã'}
                {h === 'almoco' && 'Horário de almoço'}
                {h === 'tarde' && 'Tarde'}
                {h === 'noite' && 'Depois das 18h'}
              </label>
            </div>
          ))}
        </div>

        <div className="col-md-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="termos"
              checked={formData.termosAceitos}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="termos">
              Li e aceito os termos deste site
            </label>
          </div>
        </div>

        <div className="col-md-12 text-center mt-4">
          <button type="submit" className="btn-orcamento">
            Solicitar orçamento
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contato;