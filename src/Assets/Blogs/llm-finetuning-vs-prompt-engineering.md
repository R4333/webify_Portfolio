---
title: When To Fine-Tune vs Prompt Engineer: A Decision Framework
author: Talha Turab
date: 2025-01-02
description: A practical rubric for choosing between prompt engineering, adapters/LoRA, or full fine-tuning.
thumbnail:
---

# When To Fine-Tune vs Prompt Engineer: A Decision Framework

Teams often jump to fine-tuning when better prompt and retrieval design would have been cheaper. Here’s the rubric I use with product and engineering leads to choose between prompting, adapters, and full fine-tunes.

## Start With Constraints
- **Latency & cost**: Can you afford larger contexts or multiple calls? If not, consider a smaller model + adapters or distillation.
- **Data sensitivity**: Can data leave your VPC? If not, lean on open-source models you can host; avoid SaaS-only fine-tunes.
- **Change velocity**: How often will instructions or policies shift? Frequent change favors prompts + retrieval over touching weights.
- **Evaluation readiness**: Do you have a test harness (groundedness, safety, task success) to catch regressions? If not, start there.

## Level 0: Prompt + Retrieval First
- Use **system prompts** with clear policies, style, refusal rules, and persona (tone, voice, jurisdiction).
- Add **retrieval** for facts instead of stuffing the prompt. Use filters + rerankers to keep contexts tight and relevant.
- Enforce **output schemas** (JSON/markdown) with validators; reject malformed outputs early.
- Add **tooling** where possible: calculators, policy lookups, canonical phrase libraries—reduce the model’s creative surface area.
- Measure **hallucination and grounding**; if you’re above 3–5%, fix retrieval and prompting before touching weights.

## Level 1: Adapters / LoRA / Prefix Tuning
- Use when the base model already knows the domain but needs **persona/style control** or **shorter contexts**.
- Great for **multi-tenant** setups: swap adapters per customer or product line without retraining the base.
- Keep adapters small; track latency impact on your serving stack. Benchmark P50/P95 and cost before/after.
- Version adapters and prompts together. Roll back with flags if safety or compliance fails.

## Level 2: Full Fine-Tune
- Justified when you need **new capabilities** not present in the base model, or must **reduce context dependence** drastically.
- Requires **high-quality, diverse, and counter-example-rich data**; otherwise you overfit and regress.
- Add an **evaluation harness**: groundedness, safety, refusal correctness, and task success before shipping.
- Plan for **continuous training**: refresh with new data and invalidations; monitor drift and refusal rates.

## Decision Checklist I Run With Teams
1) Can retrieval + prompting + tools solve 80%? Start there.
2) Need tighter style control or lower latency? Use adapters/LoRA.
3) Need new capabilities and have high-quality evals + data? Fine-tune.
4) If you can’t evaluate it, you can’t ship it—pause and build the test harness.

## Data Strategy For Fine-Tuning
- Collect **user traces** with labels: success/failure, refusal correctness, groundedness, safety violations.
- Create **hard negatives**: adversarial instructions, conflicting policies, long contexts, multilingual variants.
- Balance the dataset: mix short and long prompts; include edge jurisdictions/products.
- Keep **data lineage**: which product version, policy version, and annotator produced each example.

## Deployment Notes
- Version everything: prompts, adapters, datasets, retrievers, rerankers, policies.
- Canary new weights; keep a rollback path to the last good model.
- Monitor **token cost, latency, refusal rates, and safety** continuously. Alert on P95 blowups and hallucination spikes.
- For regulated flows, keep **source-citation checks** and **safety filters** even after fine-tuning—weights don’t remove the need for guardrails.

Use this framework to avoid premature fine-tuning while still giving your product the control, efficiency, and safety it needs.
