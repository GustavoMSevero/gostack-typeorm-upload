import { getCustomRepository, TransactionRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';

import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRespository = getCustomRepository(TransactionsRepository);

    const transaction = await transactionsRespository.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction does not exist');
    }

    await transactionsRespository.remove(transaction);
  }
}

export default DeleteTransactionService;
